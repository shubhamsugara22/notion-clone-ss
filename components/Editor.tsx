'use client';
import { useRoom } from "@liveblocks/react/suspense";
import { useState } from "react";
import * as Y from "yjs";
import { LiveblocksYjsProvider } from "@liveblocks/yjs";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

function Editor() {
	const room = useRoom();
	const [doc, setDoc] = useState<Y.Doc>();
	const [provider, setProvider] = useState<LiveblocksYjsProvider>();
	const [darkmode, setDarkmode] = useState(false);

	const style = `hover:text-white ${
	   darkmode
	   ? "text-gray-300 bg-gray-700 hover:bg-gray-100 hover:text-gray-700"
	   : "text-gray-700 bg-gray-200 hover:bg-gray-300 hover:text-gray-700"
      }`;
	  
  return (
	<div className="max-w-6xl mx-auto">
		<div>
			{/* TranslateDocument AI */}
	        {/* ChatToDocument */}

	        {/* Dark Mode */}
			<Button className={style} onClick={() => setDarkmode(!darkmode)}>
			  {darkmode ? <SunIcon /> : <MoonIcon />}
			</Button>	
		</div>

		{/* BlockNote */}	 
	</div>
  )
}

export default Editor