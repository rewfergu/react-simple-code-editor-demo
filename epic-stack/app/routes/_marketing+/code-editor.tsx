import { useState } from 'react'
import Editor from '~/components/Editor'
import Prism from 'prismjs'
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
					Prism.highlight(cooklang, Prism.languages.cooklang, 'cooklang')
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
