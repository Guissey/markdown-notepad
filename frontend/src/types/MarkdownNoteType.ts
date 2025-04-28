export type ISODate = string;

type MarkdownNote = {
  id: number;
  label: string;
  markdown?: string | null;
  updatedAt?: ISODate;
  createdAt?: ISODate;
};

export default MarkdownNote;

export const EXAMPLE_NOTES: MarkdownNote[] = [
  {
    id: 1,
    label: 'Example local',
    markdown: `
# Title

## Code block

Voici un bloc de code
\`\`\`js
const h = 2 + 3;
const foo = () => {
  return 'bar';
};
\`\`\`

## Autres exemples

Essais

### 1. Sommaire

1. Premier point
2. Deuxième point
    1. Sous-point

        Paragraphe

3. Troisième point

- Premier chapitre
- Second chapitre

### 2. Gestion de lignes  

Texte.  
Line break.  
&nbsp;&nbsp;&nbsp; Indentation.  
\\
Saut de ligne

### 3. Caractères

*Italic*    
**Bold**  
***Both***

### 4. Lien et image

<https://google.com>  
[vite image link](/vite.svg)  
![vite image](/vite.svg)

### 5. Avec le plugin remark-gfm

| Colonne 1 | Colonne 2 | Colonne 3 |
| :-------: | :-------: | :-------: |
| Valeur 1  | Valeur 2  | Valeur 3  |
| Valeur 4  | Valeur 5  | Valeur 6  |

- [X] To
- [ ] Do

### 6. Pas de HTML sans le plugin rehype-raw
<details>
  <summary>Details</summary>
  Something small enough to escape casual notice.
</details>
`,
    updatedAt: (new Date()).toISOString(),
    createdAt: (new Date()).toISOString(),
  },
  {
    id: 2,
    label: 'Note encore vide',
    markdown: '',
    createdAt: (new Date()).toISOString(),
  },
];
