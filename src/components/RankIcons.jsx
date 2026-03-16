// Rank icon components using actual rank images from assets/Ranks/

import eliteImg from '../assets/Ranks/elite.png';
import mythicImg from '../assets/Ranks/mythic_rank.png';
import apexImg from '../assets/Ranks/apex_rank.png';
import pikaImg from '../assets/Ranks/pika_rank.png';
import meowwImg from '../assets/Ranks/Meoww_rank.png';

const rankIconStyle = {
    width: '160px',
    height: '160px',
    objectFit: 'contain',
    display: 'block',
};

export function EliteIcon() {
    return <img src={eliteImg} alt="Elite Rank" style={rankIconStyle} />;
}

export function MythicIcon() {
    return <img src={mythicImg} alt="Mythic Rank" style={rankIconStyle} />;
}

export function ApexIcon() {
    return <img src={apexImg} alt="Apex Rank" style={rankIconStyle} />;
}

export function PikaIcon() {
    return <img src={pikaImg} alt="Pika Rank" style={rankIconStyle} />;
}

export function MeowwIcon() {
    return <img src={meowwImg} alt="Meoww Rank" style={rankIconStyle} />;
}
