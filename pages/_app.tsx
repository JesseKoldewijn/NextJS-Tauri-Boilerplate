import "../styles/globals.scss";

import type { AppProps } from "next/app";
import getConfig from "next/config";

import { useEffect } from "react";

import { invoke } from "@tauri-apps/api/tauri";

function MyApp({ Component, pageProps }: AppProps) {
	const { publicRuntimeConfig } = getConfig();
	let debug_message: string = "Hello, I'm debugging!";

	useEffect(() => {
		if (publicRuntimeConfig.STAGE == "dev") {
			invoke("debug", { msg: debug_message })
				.then(console.log)
				.catch(console.error);
		} else if (publicRuntimeConfig.STAGE == "prod") {
			invoke("greet", { name: "User" })
				.then(console.log)
				.catch(console.error);
		} else {
			throw Error(
				"STAGE environment var isn't set in next.config.js in the project root"
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <Component {...pageProps} />;
}

export default MyApp;
