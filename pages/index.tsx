import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<div className="container">
			<main className="main">
				<h1 className="title">
					Welcome to <strong>Tauri+NextJS</strong>
				</h1>

				<p className="description">
					Description <code className="code">CodeBlock</code>
				</p>

				<div className="grid">
					<div className="card">
						<h2>H2 &rarr;</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Odio modi dolores et, dol soluta possimus
							adipisicing
						</p>
					</div>

					<div className="card">
						<h2>H2 &rarr;</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Odio modi dolores et, dol soluta possimus
							adipisicing
						</p>
					</div>

					<div className="card">
						<h2>H2 &rarr;</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Odio modi dolores et, dol soluta possimus
							adipisicing
						</p>
					</div>

					<div className="card">
						<h2>H2 &rarr;</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Odio modi dolores et, dol soluta possimus
							adipisicing
						</p>
					</div>
				</div>
			</main>

			<footer className="footer">
				<span>
					Powered by&nbsp;
					<strong className="branding">
						GlitchTech Developments
					</strong>
				</span>
			</footer>
		</div>
	);
};

export default Home;
