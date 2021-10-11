import Image from 'next/image';
import { WhiskyItem } from '../utils/baseUtils';
import styles from './card.module.css';

function Stars(props: { rating: number }) {
  const five = ['a', 'b', 'c', 'd', 'e'];

  const bgWidth = 160;
  const fgWidth = props.rating / 5 * bgWidth;

  return (
    <div className={styles.cardStars}>
      <div className={styles.cardStarsBg} style={{ width: `${bgWidth}px` }}>
        {five.map((l) => (
          <i key={l} className={`material-icons ${styles.cardStarIcon}`}>
            star
          </i>
        ))}
      </div>
      <div className={styles.cardStarsFg} style={{ width: `${fgWidth}px` }}>
        {five.map((l) => (
          <i key={l} className={`material-icons ${styles.cardStarIcon}`}>
            star
          </i>
        ))}
      </div>
      <p className={styles.cardStarsText}>
        <span>{props.rating.toFixed(2)}</span> stars
      </p>
    </div>
  );
}

function WhiskyCard(props: { whisky: WhiskyItem }) {
  const { id, brand, name, rating } = props.whisky;
  return (
    <a href={`/whiskies/${id}`}>
      <Image
        className={styles.cardImg}
        src={`/images/whiskies/${id}.jpg`}
        alt={`${brand} - ${name}`}
        width="400"
        height="400"
      />
      <h3 className={styles.cardTitle}>{brand}</h3>
      <p className={styles.cardSubtitle}>{name}</p>
      <Stars rating={rating} />
    </a>
  );
}

function UserCard(props: { user: string }) {
  return <></>;
}

type CardProps = {
  whisky?: WhiskyItem;
  user?: string;
};

export default function Card({ whisky, user }: CardProps) {
  return (
    <div className={styles.card}>
      {whisky && <WhiskyCard whisky={whisky} />}
      {user && <UserCard user={user} />}
    </div>
  );
}
