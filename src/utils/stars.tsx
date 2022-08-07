import { Star } from '../components/star/star';
export const addStars = (n: number, isFormStar = false) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(<Star isGold={i <= n && !isFormStar} position={i} isFormStar={isFormStar} />);
  }
  return stars;
};
export function isGoldStar(position: number, hoveredStars: number, choisesStars: number) {
  if (hoveredStars > choisesStars) {
    return position <= hoveredStars;
  } else if (choisesStars > 0) {
    return position <= choisesStars;
  } else return false;
}
