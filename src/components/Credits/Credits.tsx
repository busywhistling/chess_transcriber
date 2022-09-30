// Third-party imports

// Global imports
import avatarUrl from '@/assets/avatar.jpg'

// Local imports

////////////////////////////////////////////////////////////////////////////////

const Credits = () => (
	<div className="credits">
		<a href="https://paramjit.org">
			<img src={avatarUrl} className="avatar" />{" "}
		</a>
		<div className="links">
			<p>
				Made by <a href="https://paramjit.org">Paramjit</a> with ♡
				<br />
				source on{" "}
				<a href="https://github.com/busywhistling/chess_transcriber">github</a> or{" "}
				<a href="https://codesandbox.io/p/github/busywhistling/chess_transcriber">
					codesandbox
				</a>
			</p>
		</div>
	</div>
);

export default Credits;
