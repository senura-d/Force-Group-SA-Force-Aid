import os
import re

replacements = [
    (re.compile(r'href="#"([^>]*>\s*Home\s*</a>)', re.IGNORECASE), r'href="index.html"\1'),
    (re.compile(r'href="#"([^>]*>\s*About Us\s*</a>)', re.IGNORECASE), r'href="4_About_Us.html"\1'),
    (re.compile(r'href="#"([^>]*>\s*Our Services\s*</a>)', re.IGNORECASE), r'href="3_Our_Services.html"\1'),
    (re.compile(r'href="#"([^>]*>\s*Our Projects\s*</a>)', re.IGNORECASE), r'href="2_Our_Projects.html"\1'),
    (re.compile(r'href="#"([^>]*>\s*Force Aid\s*</a>)', re.IGNORECASE), r'href="6_Force_Aid_Inc.html"\1'),
    (re.compile(r'href="#"([^>]*>\s*Contact Us\s*</a>)', re.IGNORECASE), r'href="5_Contact_Us.html"\1'),
]

for filename in os.listdir('.'):
    if filename.endswith('.html'):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        for pat, repl in replacements:
            content = pat.sub(repl, content)
            
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)

print("Linked pages successfully with case-insensitivity!")
