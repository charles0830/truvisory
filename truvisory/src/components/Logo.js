import React, { Component } from 'react';
import {lightTheme, darkTheme, device} from '../theme';
import styled from 'styled-components';
import history from './../history';


export const LogoSVG = styled.svg`
    width: 200px;
	height: auto;
	float: left;
	margin-top:20px;
	@media ${device.tablet}{
		width: 130px;
	}
`;

export default class Logo extends Component {
    render(){
        const theme = this.props.theme==='light'?lightTheme: darkTheme;
        return (
						<LogoSVG
							// width="100"
							// height="auto"
							onClick={()=> history.push("/")}
							viewBox="0 0 576 176"
							preserveAspectRatio="xMidYMid meet"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M74.448 36.2H3.312V43.4H34.992V137H42.768V43.4H74.448V36.2Z"
								fill={theme.text}
							/>
							<path
								d="M87.288 79.112V65H80.088V137H87.288V96.968C87.288 78.536 98.952 70.904 111.336 70.904V63.992C101.544 63.992 92.184 67.736 87.288 79.112ZM177.772 65V103.016C177.772 122.456 166.684 131.672 152.572 131.672C139.036 131.672 131.404 123.032 131.404 109.784V65H124.06V109.784C124.06 127.208 134.86 138.584 151.996 138.584C163.084 138.584 172.3 133.976 177.772 123.32V137H184.972V65H177.772ZM249.981 65L235.005 110.648L220.029 65H196.125L222.765 137H247.245L273.885 65H249.981ZM288.579 47.576C291.747 47.576 294.339 44.984 294.339 41.816C294.339 38.792 291.747 36.2 288.579 36.2C285.411 36.2 282.819 38.792 282.819 41.816C282.819 44.984 285.411 47.576 288.579 47.576ZM284.979 137H292.179V65H284.979V137ZM319.265 83.864C319.265 75.224 327.185 70.328 336.545 70.328C344.465 70.328 351.953 73.784 354.977 81.272L361.025 77.816C357.137 69.032 348.209 63.416 336.545 63.416C321.857 63.416 312.065 72.488 312.065 83.864C312.065 109.784 355.697 98.552 355.697 118.136C355.697 127.208 347.201 131.672 337.121 131.672C326.321 131.672 318.545 126.776 315.953 119L309.761 122.6C313.217 131.816 322.721 138.584 337.121 138.584C352.529 138.584 362.897 129.944 362.897 118.136C362.897 91.784 319.265 103.16 319.265 83.864ZM411.189 138.584C432.069 138.584 448.917 122.312 448.917 101C448.917 79.688 432.069 63.416 411.189 63.416C390.165 63.416 373.317 79.688 373.317 101C373.317 122.312 390.165 138.584 411.189 138.584ZM411.189 131.672C394.053 131.672 380.661 118.136 380.661 101C380.661 83.864 394.053 70.328 411.189 70.328C428.325 70.328 441.573 83.864 441.573 101C441.573 118.136 428.325 131.672 411.189 131.672ZM473.444 79.112V65H466.244V137H473.444V96.968C473.444 78.536 485.108 70.904 497.492 70.904V63.992C487.7 63.992 478.34 67.736 473.444 79.112ZM566.198 65L541.142 129.08L512.054 65H504.278L537.398 138.296L535.814 142.184C531.35 152.696 524.006 159.896 514.358 159.032V165.8C526.742 166.808 537.398 157.448 542.87 143.624L573.974 65H566.198Z"
								fill={theme.text}
							/>
							<line
								x1="4"
								y1="40"
								x2="279"
								y2="40"
								stroke={theme.text}
								stroke-width="8"
							/>
							<line
								x1="297"
								y1="40"
								x2="576"
								y2="40"
								stroke={theme.text}
								stroke-width="8"
							/>
						</LogoSVG>
				);
    }
}