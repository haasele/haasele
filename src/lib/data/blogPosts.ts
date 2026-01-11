export interface BlogPost {
	slug: string;
	title: string;
	excerpt: string;
	date: string;
	readTime: string;
	category: string;
	content: string;
}

export const blogPosts: BlogPost[] = [
	{
		slug: 'moderne-css-techniken-2024',
		title: 'Moderne CSS-Techniken für 2024',
		excerpt: 'Ein Überblick über die neuesten CSS-Features wie Container Queries, :has() Selector und mehr.',
		date: '15. Dezember 2024',
		readTime: '5 min',
		category: 'CSS',
		content: `
## Container Queries: Das Ende der Media Query Limitierungen

Container Queries sind endlich in allen modernen Browsern verfügbar und revolutionieren die Art, wie wir responsive Komponenten entwickeln. Im Gegensatz zu Media Queries, die auf die Viewport-Größe reagieren, ermöglichen Container Queries Styling basierend auf der Größe des Parent-Containers.

\`\`\`css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
\`\`\`

## Der :has() Selector: CSS bekommt einen Parent Selector

Der lang ersehnte "Parent Selector" ist da! Mit \`:has()\` können wir endlich Elemente basierend auf ihren Kindern stylen.

\`\`\`css
/* Style a form differently when it contains an error */
form:has(.error) {
  border-color: red;
}

/* Style a card with an image differently */
.card:has(img) {
  padding: 0;
}
\`\`\`

## Subgrid: Verschachtelte Grids perfekt ausrichten

Subgrid ermöglicht es verschachtelten Grid-Elementen, die Tracks des Parent-Grids zu übernehmen. Das löst eines der größten Layout-Probleme bei komplexen Designs.

## Fazit

2024 ist ein großartiges Jahr für CSS. Diese Features reduzieren die Abhängigkeit von JavaScript für Layout-Logik erheblich und machen unseren Code sauberer und wartbarer.
		`
	},
	{
		slug: 'svelte-5-runes-game-changer',
		title: 'Svelte 5 Runes: Ein Game Changer',
		excerpt: 'Warum Svelte 5 mit seinen neuen Runes die Art und Weise verändert, wie wir reaktive UIs bauen.',
		date: '10. Dezember 2024',
		readTime: '8 min',
		category: 'Svelte',
		content: `
## Was sind Runes?

Svelte 5 führt "Runes" ein - eine neue Art, Reaktivität zu deklarieren. Runes sind spezielle Funktionen, die mit \`$\` beginnen und dem Compiler signalisieren, wie er den Code transformieren soll.

## Die wichtigsten Runes

### $state - Reaktive Variablen

\`\`\`svelte
<script>
  let count = $state(0);
</script>

<button onclick={() => count++}>
  Clicks: {count}
</button>
\`\`\`

### $derived - Berechnete Werte

\`\`\`svelte
<script>
  let count = $state(0);
  let doubled = $derived(count * 2);
</script>
\`\`\`

### $effect - Side Effects

\`\`\`svelte
<script>
  let count = $state(0);
  
  $effect(() => {
    console.log('Count changed to', count);
  });
</script>
\`\`\`

## Warum ist das wichtig?

1. **Explizite Reaktivität**: Kein Rätselraten mehr, was reaktiv ist
2. **Bessere TypeScript-Unterstützung**: Vollständige Typsicherheit
3. **Wiederverwendbare Logik**: Reaktive Logik kann jetzt einfach in Funktionen extrahiert werden
4. **Konsistenz**: Gleiche Patterns in .svelte und .ts Dateien

## Migration von Svelte 4

Die Migration ist schrittweise möglich. Der alte Syntax funktioniert weiterhin, aber für neue Projekte sind Runes definitiv der Weg nach vorne.
		`
	},
	{
		slug: 'typescript-best-practices',
		title: 'TypeScript Best Practices',
		excerpt: 'Tipps und Tricks für sauberen, typsicheren Code in großen Projekten.',
		date: '5. Dezember 2024',
		readTime: '6 min',
		category: 'TypeScript',
		content: `
## Strict Mode aktivieren

Der wichtigste Schritt für typsicheren Code: Aktiviere den Strict Mode in deiner \`tsconfig.json\`.

\`\`\`json
{
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`

## Vermeide \`any\`

\`any\` deaktiviert effektiv die Typprüfung. Nutze stattdessen:

- \`unknown\` für unbekannte Typen (erfordert Type-Checking vor Verwendung)
- Generics für flexible, aber typsichere Funktionen
- Type Guards für Runtime-Typprüfung

## Nutze Utility Types

TypeScript bietet mächtige eingebaute Utility Types:

\`\`\`typescript
// Alle Properties optional machen
type PartialUser = Partial<User>;

// Alle Properties required machen
type RequiredUser = Required<User>;

// Bestimmte Properties auswählen
type UserPreview = Pick<User, 'id' | 'name'>;

// Bestimmte Properties ausschließen
type UserWithoutPassword = Omit<User, 'password'>;
\`\`\`

## Discriminated Unions für State Management

\`\`\`typescript
type State = 
  | { status: 'loading' }
  | { status: 'success'; data: User[] }
  | { status: 'error'; error: string };

function handleState(state: State) {
  switch (state.status) {
    case 'loading':
      return <Spinner />;
    case 'success':
      return <UserList users={state.data} />;
    case 'error':
      return <Error message={state.error} />;
  }
}
\`\`\`

## Const Assertions für Literal Types

\`\`\`typescript
// Ohne as const: string[]
const colors = ['red', 'green', 'blue'];

// Mit as const: readonly ["red", "green", "blue"]
const colors = ['red', 'green', 'blue'] as const;
\`\`\`

## Fazit

TypeScript ist nur so gut wie die Typen, die du definierst. Investiere Zeit in gute Typdefinitionen - es zahlt sich aus!
		`
	}
];

export function getPostBySlug(slug: string): BlogPost | undefined {
	return blogPosts.find(post => post.slug === slug);
}
