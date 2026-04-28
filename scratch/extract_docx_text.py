import xml.etree.ElementTree as ET
import sys

def extract_text(xml_file):
    tree = ET.parse(xml_file)
    root = tree.getroot()
    # Word doc namespaces
    ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    
    texts = []
    for p in root.findall('.//w:p', ns):
        p_text = []
        for t in p.findall('.//w:t', ns):
            if t.text:
                p_text.append(t.text)
        if p_text:
            texts.append("".join(p_text))
    return "\n".join(texts)

if __name__ == "__main__":
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
    print(extract_text(sys.argv[1]))
