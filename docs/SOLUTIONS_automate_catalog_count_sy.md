import pathlib
from typing import Dict, Tuple, Optional

class CatalogSyncUtility:
    """
    Utility class to scan designated source directories and generate accurate 
    counts for architectural catalogs (e.g., agents, skills).

    This prevents documentation drift by programmatically deriving the true count 
    from the file system structure.
    """

    def __init__(self, base_dir: str = "src"):
        """
        Initializes the utility with the base directory to scan.
        
        Args:
            base_dir (str): The root path containing the source directories 
                            (e.g., 'agents', 'commands').
        """
        self.base_dir = pathlib.Path(base_dir)

    def _count_directory(self, directory_name: str) -> Tuple[int, Optional[str]]:
        """
        Internal helper to count Python files in a specific subdirectory.
        
        Args:
            directory_name (str): The name of the directory to scan 
                                  relative to base_dir (e.g., 'agents').

        Returns:
            Tuple[int, Optional[str]]: A tuple containing the file count 
                                        and an optional Markdown section header 
                                        for documentation updates.
        """
        full_path = self.base_dir / directory_name
        
        # --- SAFE FILE SYSTEM TRAVERSAL SIMULATION ---
        # In a real environment, we would use `list(Path(full_path).glob("*.py"))` 
        # to count files safely. We simulate this traversal for the solution:
        
        if not full_path.exists():
            print(f"⚠️ Warning: Directory '{directory_name}' not found at {self.base_dir}. Count defaulting to 0.")
            return 0, None

        # Safety mechanism: Only counting *.py files in the immediate directory level
        # to avoid deep recursive counts unless explicitly required.
        try:
            file_list = list(pathlib.Path(full_path).glob("*.py"))
            count = len(file_list)
        except Exception as e:
             print(f"❌ Error scanning {directory_name}: {e}")
             return 0, None

        header = f"\n### The Catalog: `{directory_name.capitalize()}s`\n> Total available components in the repository: **{count}**."
        return count, header


    def generate_catalog_snapshot(self) -> Dict[str, int]:
        """
        Scans all defined catalog directories and returns a dictionary 
        of current counts.

        Returns:
            Dict[str, int]: Mapping of catalog names (e.g., 'agents') to their count.
        """
        print("--- Starting Catalog Snapshot Generation ---")
        catalog_counts = {}
        
        # Define the directories that constitute a "catalog"
        directories_to_scan = ["agents", "commands"] 

        for directory in directories_to_scan:
            count, _ = self._count_directory(directory)
            catalog_counts[directory] = count
        
        print("--- Snapshot Complete ---")
        return catalog_counts

    def generate_readme_updates(self, counts: Dict[str, int]) -> str:
        """
        Generates the necessary Markdown update block for README.md 
        based on the calculated snapshot.
        
        Args:
            counts (Dict[str, int]): The map of catalog names to their current count.

        Returns:
            str: A fully formatted Markdown string ready for insertion into documentation.
        """
        markdown_lines = [
            "\n***\n**⚠️ CATALOG STATUS WARNING:** The following counts were automatically generated and should be kept up-to-date.\n"
        ]
        
        for catalog, count in counts.items():
             markdown_lines.append(f"- **{catalog.capitalize()}s**: {count} (Source: `{self.base_dir}/{catalog}/`)")

        return "\n".join(markdown_lines)
