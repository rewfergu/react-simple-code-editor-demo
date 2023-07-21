import { useState } from 'react'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-cooklang'

const defaultCooklang = `Mix @flour{1%cup} and @water{1/2%cup} in a #large bowl{} and serve.`

export default function CooklangEditor() {
	const [cooklang, setCooklang] = useState(defaultCooklang)
	return (
		<div id="cooklang-editor">
			<Editor
				value={cooklang}
				onValueChange={cooklang => setCooklang(cooklang)}
				highlight={cooklang =>
					highlight(cooklang, languages.cooklang, 'cooklang')
				}
				padding={16}
				preClassName="language-cooklang"
				style={{
					color: '#fff',
					fontFamily: '"Fira code", "Fira Mono", monospace',
					fontSize: 14,
					backgroundColor: '#021622',
				}}
			/>
		</div>
	)
}
