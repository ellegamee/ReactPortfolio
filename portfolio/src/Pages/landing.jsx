import backgroundImage from '../Images/BackgroundWave.svg'

export default function Landing() {
    const wrapper_div = {
        'backgroundImage': `url(${backgroundImage})`,
        'backgroundPosition': 'center top',

        'position': 'absolute',
        'top': '0',
        'bottom': '0',
        'left': '0',
        'right': '0',
    }
    
    // <img style={styled_background} src= alt='' />
    return (
        <div style={wrapper_div}>
            <p>My Portfolio</p>
            <p>Where adventure leads</p>
        </div>
    )
}
