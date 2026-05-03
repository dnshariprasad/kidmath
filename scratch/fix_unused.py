import os
import re

files_to_fix = [
    ('src/modules/activities/english/AlphabetPage/index.tsx', [
        (r'const navigate = useNavigate\(\);', ''),
        (r'import { useNavigate } from "react-router-dom";', 'import { useLocation } from "react-router-dom";'), # check if useLocation is used
    ]),
    ('src/modules/activities/english/MissingLettersChallenge/index.tsx', [
        (r'const navigate = useNavigate\(\);', ''),
        (r'import { useNavigate } from "react-router-dom";', ''),
    ]),
    ('src/modules/activities/hindi/AlphabetHindiChallenge/index.tsx', [
        (r'const navigate = useNavigate\(\);', ''),
        (r'import { useNavigate } from "react-router-dom";', ''),
    ]),
    ('src/modules/activities/math/NumbersPage/index.tsx', [
        (r'SettingsArea,', ''),
    ]),
    ('src/modules/activities/math/PlaceValuesPage/index.tsx', [
        (r'Sparkles,', ''),
    ]),
    ('src/modules/activities/english/SightWordsChallenge/index.tsx', [
        (r'Sparkles,', ''),
    ]),
]

for filepath, replacements in files_to_fix:
    full_path = os.path.join(os.getcwd(), filepath)
    if os.path.exists(full_path):
        with open(full_path, 'r') as f:
            content = f.read()
        for pattern, repl in replacements:
            content = re.sub(pattern, repl, content)
        with open(full_path, 'w') as f:
            f.write(content)
        print(f"Fixed {filepath}")
