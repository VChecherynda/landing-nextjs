import Layout from "../components/Layout/Layout";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AlbumIcon from '@mui/icons-material/Album';
import AppleIcon from '@mui/icons-material/Apple';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Main.module.scss';


function getCooridinates() {
    let options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }

    function success(pos) {
        let crd = pos.coords;
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options)
}

export async function getStaticProps(cntext) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${process.env.WEATHER_API_KEY}&units=metric`);

    const data = await response.json();
     
    return {
      props: data
    }
}

function App({ dt, name, main, weather }) {
    return (
        <Layout>
            <section>
                <Stack direction="row" justifyContent="center" >
                    <Stack className={styles.halfPageBlock}>
                        <Stack  className={styles.textBlock}>
                            <h1 className={styles.title}>T-Rex</h1> 
                            <p className={styles.text}>
                                Like other tyrannosaurids, Tyrannosaurus was a bipedal carnivore 
                                with a massive skull balanced by a long, heavy tail. Relative 
                                to its large and powerful hind limbs, the forelimbs of Tyrannosaurus 
                                were short but unusually powerful for their size, and they 
                                had two clawed digits. The most complete specimen measures 
                                up to 12.3 meters (40 feet) in length, though T. rex could grow 
                                to lengths of over 12.3 m (40 ft), up to 3.96 m (13 ft) tall 
                                at the hips, and according to most modern estimates 
                                6 metric tons (6.6 short tons) to 8 metric tons (8.8 short tons) in weight.
                                Although other theropods rivaled or exceeded Tyrannosaurus rex in size, 
                                it is still among the largest known land predators and is estimated to 
                                have exerted the strongest bite force among all terrestrial animals. 
                                By far the largest carnivore in its environment.
                            </p>
                        </Stack>
                        <Stack direction="row" className={styles.buttonBlock}>
                            <Link href="/about">
                                <Button variant="contained" >
                                    About
                                </Button>
                            </Link>
                        </Stack>
                    </Stack>
                    <Stack className={styles.halfPageBlock}>
                        <img src="/t-rex.png" width="400" height="400" alt="main picture" />
                    </Stack>
                </Stack>
            </section>

            <section>
                <Stack direction="row" justifyContent="center" spacing={2}>
                    <Stack direction="column" alignItems="center" className={styles.card}>
                        <AlbumIcon />
                        <h2>Music</h2>
                        <p>Some random text.You should not read it. But I leave as it is.</p>
                    </Stack>
                    <Stack direction="column" alignItems="center" className={styles.card}>
                        <AppleIcon />
                        <h2>Apple</h2>
                        <p>Some random text.You should not read it. But I leave as it is.</p>
                    </Stack>
                    <Stack  direction="column" alignItems="center" className={styles.card}>
                        <AlternateEmailIcon />
                        <h2>Net</h2>
                        <p>Some random text.You should not read it. But I leave as it is.</p>
                    </Stack>
                </Stack>
            </section>

            <section>
                <Stack justifyContent="center" alignItems="center">
                    {weather.map(day => {
                        const parsedDate = new Date(dt * 1000);
                        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                        const fullYear = parsedDate.getFullYear();
                        const month = months[parsedDate.getMonth()];
                        const date = parsedDate.getDate();

                        console.log('[day]', day)

                        return (
                            <Stack key={day.id} direction="column" alignItems="center" className={styles.weatherCard}>
                                <span>{`city: ${name}`}</span>
                                <span>{`day: ${date}-${month}-${fullYear}`}</span>
                                <span>{`temperature: ${Math.round(main.temp)}°C`}</span> 

                                <img
                                    src={`http://openweathermap.org/img/wn/${day.icon}.png`} 
                                    width={20} 
                                    height={20}
                                />
                                <span>{day.description}</span>
                            </Stack> 
                        )
                    })}
                </Stack> 
            </section>
        </Layout>
    );
}

export default App;