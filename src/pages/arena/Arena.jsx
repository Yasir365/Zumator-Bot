import './arena.scss'


const circles = [
  { id: 1, info: 'Top Performer' },
  { id: 2, info: 'Fastest Growth' },
  { id: 3, info: 'Most Consistent' },
  { id: 4, info: 'Best Innovation' },
  { id: 5, info: 'Strategic Thinker' },
  { id: 6, info: 'Excellent Leadership' },
  { id: 7, info: 'Rising Star' },
  { id: 8, info: 'Outstanding Collaboration' }
];


export default function Arena() {
  return (
    <div className='arena'>
      <h1 className="title">Leaderboard</h1>
      {circles.map((circle, index) => (
        <div className={index % 2 == 0 ? 'circle-wrapper circle-left' : 'circle-wrapper circle-right'}>
          <div key={circle.id} className={`circle`}>
            <span>{circle.info}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
