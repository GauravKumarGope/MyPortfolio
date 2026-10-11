import Skyline from './Skyline';
import './story.css';

const LABELS = ['01 INTRO', '02 SKILLS', '03 GOALS'];

export default function StoryTrack({ step = 1, onGoToStep = () => {} }) {
  // Steps 1 (Intro), 2 (Skills), 3 (Goals) belong to the Journey sequence
  const isJourney = step >= 1 && step <= 3;
  const activeIndex = Math.max(0, Math.min(2, step - 1));
  const progress = activeIndex / 2; // 0, 0.5, 1.0

  return (
    <div
      className='story-hud'
      style={{
        opacity: isJourney ? 1 : 0,
        pointerEvents: isJourney ? 'auto' : 'none',
        transition: 'opacity 0.5s ease'
      }}
    >
      <Skyline progress={progress} />

      <button
        className='arrow prev'
        onClick={() => onGoToStep(step - 1)}
        aria-label='Previous section'
      >
        ←
      </button>

      <button
        className='arrow next'
        onClick={() => onGoToStep(step + 1)}
        aria-label='Next section'
      >
        →
      </button>

      <nav className='road' style={{ '--p': progress }} aria-label='Story timeline navigation'>
        <div className='line'>
          <div className='trail' />
        </div>
        <img className='car' src='/car.webp' alt='' width='64' height='32' />

        {LABELS.map((label, i) => (
          <button
            key={i}
            className={'stop' + (i <= activeIndex ? ' on' : '')}
            style={{ left: (i / 2 * 100) + '%' }}
            onClick={() => onGoToStep(i + 1)}
          >
            <span className='dot' />
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
}
