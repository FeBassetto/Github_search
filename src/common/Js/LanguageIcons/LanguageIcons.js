import {

    SiJavascript,
    SiCsharp,
    SiCplusplus,
    SiCloudera,
    SiGo,
    SiJava,
    SiPhp,
    SiPython,
    SiScala,
    SiTypescript,
    SiRuby,
    SiHtml5,
    SiCss3,
    SiGithub,
    SiPerl,
    SiR,
    SiJupyter,
    SiRust,
    SiKotlin,
    SiDart,
    SiJinja,
    SiJulia,
    SiCoffeescript,
    SiElixir,
    SiCrystal,
    SiErlang,
    SiNim

} from 'react-icons/si'
import {VscTerminalPowershell} from 'react-icons/vsc'
import styled from 'styled-components'

const StyledYellow = styled.span`
    color:#d1b711;
`

const StyledPurple = styled.span`
    color:purple;
`

const StyledBlue = styled.span`
    color:blue;
`

const StyledLightblue = styled.span`
    color:#03b6fc;
`

const StyledDarkblue = styled.span`
    color:darkblue;
`

const StyledRed = styled.span`
    color:red;
`

const StyledOrange = styled.span`
    color:#e38710;
`

const StyledBlack = styled.span`
    color:black;
`

const languagesIcons = {
    'javascript': <StyledYellow><SiJavascript /></StyledYellow>,
    'c#': <StyledPurple><SiCsharp /></StyledPurple>,
    'c++': <StyledBlue><SiCplusplus /></StyledBlue>,
    'c': <StyledLightblue><SiCloudera /></StyledLightblue>,
    'go': <StyledLightblue><SiGo /></StyledLightblue>,
    'java': <StyledRed><SiJava /></StyledRed>,
    'php': <StyledDarkblue><SiPhp /></StyledDarkblue>,
    'python': <StyledYellow><SiPython /></StyledYellow>,
    'scala': <StyledRed><SiScala /></StyledRed>,
    'typescript': <StyledLightblue><SiTypescript /></StyledLightblue>,
    'ruby': <StyledRed><SiRuby /></StyledRed>,
    'html': <StyledOrange><SiHtml5 /></StyledOrange>,
    'css': <StyledBlue><SiCss3 /></StyledBlue>,
    'perl': <StyledPurple><SiPerl /></StyledPurple>,
    'r': <StyledBlue><SiR /></StyledBlue>,
    'jupyter notebook': <StyledOrange><SiJupyter /></StyledOrange>,
    'rust': <StyledRed><SiRust /></StyledRed>,
    'kotlin': <StyledPurple><SiKotlin /></StyledPurple>,
    'dart': <StyledLightblue><SiDart /></StyledLightblue>,
    'jinja': <StyledRed><SiJinja/></StyledRed>,
    'shell': <VscTerminalPowershell/>,
    'julia': <StyledPurple><SiJulia/></StyledPurple>,
    'coffeescript': <StyledDarkblue><SiCoffeescript/></StyledDarkblue>,
    'elixir': <StyledPurple><SiElixir/></StyledPurple>,
    'crystal':<StyledBlue><SiCrystal/></StyledBlue>,
    'erlang': <StyledRed><SiErlang/></StyledRed>,
    'nim':<StyledYellow><SiNim/></StyledYellow>,
    'default': <StyledBlack><SiGithub /></StyledBlack>

}

export default languagesIcons