import React from 'react'
import { IconWrapper } from './IconWrapper'

export const ReligionIcon = ({ className }: { className: string }) => {
	return (
		<IconWrapper className={className}>
			<svg className="svg-icon"
				style={{ verticalAlign: "middle", fill: "currentColor", overflow: "hidden" }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M463.803733 0C204.8 0 0 204.8 0 463.803733s204.8 463.803733 463.803733 463.803734c144.5888 0 301.192533-48.196267 385.501867-156.603734-54.203733 36.181333-156.603733 78.301867-234.9056 78.301867-198.792533 0-349.3888-198.792533-349.3888-397.5168S415.607467 78.370133 614.4 78.370133c72.2944 0 174.6944 42.120533 234.9056 78.2336C764.996267 48.196267 608.324267 0 463.803733 0zM750.933333 204.8l-68.266666 170.666667H477.866667L648.533333 477.866667l-68.266666 204.8L750.933333 580.266667l170.666667 102.4-68.266667-204.8L1024 375.466667h-204.8L750.933333 204.8z" fill="" /></svg> 


		</IconWrapper>

	)
}

export default ReligionIcon