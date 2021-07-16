import { useC2Mod } from '@/concents/configs/useC2Mod';
import styles from './index.less';

export default function IndexPage() {
  const { state: { menus } } = useC2Mod('$$global')
  console.log('IndexPage',menus)
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
