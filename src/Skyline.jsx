import { useRef, useEffect } from 'react';

const SKY = [[247, 237, 221], [246, 246, 241], [246, 221, 208]];
const SUN = [[90, 150], [340, 120], [600, 160]];
const TREES = [[838, 9], [862, 11], [1262, 10], [1290, 8]];

const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
const at = (arr, p) => {
  const s = p * 2;
  const i = Math.min(1, Math.floor(s));
  return mix(arr[i], arr[i + 1], s - i);
};

export default function Skyline({ progress = 0 }) {
  const sky = useRef(null);
  const sun = useRef(null);
  const far = useRef(null);
  const mid = useRef(null);

  useEffect(() => {
    const p = Math.max(0, Math.min(1, progress));
    const c = at(SKY, p);
    const s = at(SUN, p);
    if (sky.current) sky.current.setAttribute('fill', 'rgb(' + c.join(',') + ')');
    if (sun.current) sun.current.setAttribute('cx', s[0]);
    if (sun.current) sun.current.setAttribute('cy', s[1]);
    if (far.current) far.current.setAttribute('transform', 'translate(' + (-p * 240) + ',0)');
    if (mid.current) mid.current.setAttribute('transform', 'translate(' + (-p * 720) + ',0)');
  }, [progress]);

  return (
    <svg className='skyline' viewBox='0 90 680 200' preserveAspectRatio='xMidYMax meet' aria-hidden='true'>
      <rect ref={sky} x='-3000' y='90' width='7000' height='140' fill='#f6f6f1' />
      <circle ref={sun} cx='90' cy='150' r='18' fill='#f0997b' />
      <g ref={far}>
        {[-680, 0, 680].map((dx) => (
          <path key={dx} transform={'translate(' + dx + ' 0)'} d='M0 220 Q85 200 170 215 Q255 232 340 214 Q425 198 510 216 Q595 232 680 220 L680 240 L0 240 Z' fill='#ecebe3' />
        ))}
      </g>
      <rect x='-3000' y='228' width='7000' height='62' fill='#ecebe3' />
      <g ref={mid} fill='#cfcdc3'>
        <g transform='translate(-95 0)'>
          <rect x='300' y='190' width='270' height='40' />
          <rect x='415' y='140' width='40' height='50' />
          <path d='M411 140 Q435 100 459 140 Z' />
          <rect x='434' y='96' width='2' height='14' />
          <circle cx='435' cy='94' r='2.5' />
          <rect x='316' y='165' width='28' height='25' />
          <path d='M313 165 Q330 138 347 165 Z' />
          <rect x='329' y='134' width='2' height='8' />
          <rect x='526' y='165' width='28' height='25' />
          <path d='M523 165 Q540 138 557 165 Z' />
          <rect x='539' y='134' width='2' height='8' />
          <rect x='368' y='175' width='14' height='15' />
          <path d='M366 175 Q375 160 384 175 Z' />
          <rect x='488' y='175' width='14' height='15' />
          <path d='M486 175 Q495 160 504 175 Z' />
          {Array.from({ length: 12 }, (_, i) => (
            <path key={i} fill='#b4b2a9' d={'M' + (312 + i * 22) + ' 228 V212 A7 7 0 0 1 ' + (326 + i * 22) + ' 212 V228 Z'} />
          ))}
        </g>

        <rect x='650' y='170' width='14' height='60' />
        <rect x='736' y='170' width='14' height='60' />
        <path d='M648 170 Q657 156 666 170 Z' />
        <path d='M734 170 Q743 156 752 170 Z' />
        <rect x='664' y='176' width='72' height='8' />
        <rect x='676' y='186' width='48' height='12' fill='#b4b2a9' />
        <g fill='#c4c2b8'>
          <rect x='596' y='205' width='26' height='12' rx='5' />
          <rect x='598' y='217' width='3' height='13' />
          <rect x='603' y='217' width='3' height='13' />
          <rect x='613' y='217' width='3' height='13' />
          <rect x='618' y='217' width='3' height='13' />
          <polygon points='617,208 624,208 632,172 626,170' />
          <ellipse cx='632' cy='168' rx='6.5' ry='3.5' />
          <ellipse cx='797' cy='212' rx='22' ry='14' />
          <circle cx='777' cy='206' r='10' />
          <rect x='784' y='222' width='6' height='8' />
          <rect x='793' y='222' width='6' height='8' />
          <rect x='803' y='222' width='6' height='8' />
          <rect x='811' y='222' width='6' height='8' />
        </g>
        <path d='M769 210 Q763 226 771 231' stroke='#c4c2b8' strokeWidth='4.5' fill='none' strokeLinecap='round' />
        <ellipse cx='785' cy='205' rx='5' ry='7' fill='#b4b2a9' />

        {TREES.map(([x, r]) => (
          <g key={x}>
            <rect x={x - 1.5} y='218' width='3' height='12' fill='#c4c2b8' />
            <circle cx={x} cy='212' r={r} fill='#d4dec4' />
          </g>
        ))}

        <path d='M880 232 C940 200 990 130 1060 128 C1130 130 1180 200 1240 232 Z' fill='#dedcd2' />
        <g fill='#c4c2b8'>
          <polygon points='1040,132 1080,132 1075,116 1045,116' />
          <polygon points='1045,116 1075,116 1071,102 1049,102' />
          <polygon points='1049,102 1071,102 1068,91 1052,91' />
          <polygon points='1052,91 1068,91 1066,83 1054,83' />
          <polygon points='1059,83 1061,83 1060,68' />
          <circle cx='1060' cy='66' r='2.2' />
        </g>
      </g>
    </svg>
  );
}
