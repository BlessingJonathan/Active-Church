import { useEffect, useState } from 'react'
import './Watch_Live.css'
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
function Watch_Live() {
    const targetDate = new Date('2025-09-28T10:00:00');
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        live: false
    });

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date();
            const diff = targetDate - now;
            if (diff <= 0) {
                setTimeLeft({ live: true });
                return;
            }
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);
            setTimeLeft({ days, hours, minutes, seconds, live: false });
        };

        updateCountdown();
        const timer = setInterval(updateCountdown, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <>
            <Navbar />
            <div className="bannerOne">
                <h1>Watch Live</h1>
                <br />
                <p>
                    Join us online for live worship services and stay
                    <br />
                    connected with our church
                    <br />
                    community from anywhere.
                </p>
            </div>

            {/* ============ Timer Section ============= */}

            <section className="timerSection">
                <div className="timerBlock">
                    <h2>Live stream</h2>
                    <p>
                        Watch our services live or catch up on recent messages
                    </p>
                    <br />

                    {timeLeft.live ? (
                        <h1 className="live-now">Live Now!</h1>
                    ) : (
                        <div className="timer">
                            <div className="time-box">
                                <span className="time-number">{timeLeft.days}</span>
                                <br />
                                <span className="time-label">Day</span>
                            </div>
                            <div className="time-box">
                                <span className="time-number">
                                    {String(timeLeft.hours).padStart(2, "0")}
                                </span>
                                <br />
                                <span className="time-label">Hours</span>
                            </div>
                            <div className="time-box">
                                <span className="time-number">
                                    {String(timeLeft.minutes).padStart(2, "0")}
                                </span>
                                <br />
                                <span className="time-label">Minutes</span>
                            </div>
                            <div className="time-box">
                                <span className="time-number">
                                    {String(timeLeft.seconds).padStart(2, "0")}
                                </span><br />
                                <span className="time-label">Seconds</span>
                            </div>
                        </div>

                    )}

                    <div className="platform-btn">
                        <Link to='https://youtube.com/@theactivechurch?si=10bjLl2wEHrp6PTn'>
                            <button className='btn yt'>Watch on YouTube</button>
                        </Link>
                        <Link>
                            <button className='btn fb'>Watch on Facebook</button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ======= Upcoming Service ============ */}
            <div className='duo-sec'>
                <section className="uc-Services">
                    <h1>Upcoming Services</h1>
                    <p>Mark your calendar and join us for these upcoming worship opportunities</p>
                    <div className="services">
                        <div className="serv-blk Friday">
                            <h3>Friday youth Service</h3>
                            <p>Join us for Youth Service</p>
                            <br />
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <path fill="#000" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z" />
                                </svg>
                                <span>

                                This Friday
                                </span>
                            </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                    <path fill="#000" d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6" />
                                    <path fill="#000" d="M10 10.5c-.09 0-.18-.02-.26-.07l-2.5-1.5A.5.5 0 0 1 7 8.5v-4c0-.28.22-.5.5-.5s.5.22.5.5v3.72l2.26 1.35a.502.502 0 0 1-.26.93" />
                                </svg>
                                <span>

                                6:00 PM
                                </span>
                            </p>
                        </div>
                        <div className="serv-blk Sunday">
                            <h3>Sunday Service</h3>
                            <p>Deep dive into God's word</p>
                            <br />
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <path fill="#000" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z" />
                                </svg>
                                <span>

                                This Sunday
                                </span>
                            </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                    <path fill="#000" d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6" />
                                    <path fill="#000" d="M10 10.5c-.09 0-.18-.02-.26-.07l-2.5-1.5A.5.5 0 0 1 7 8.5v-4c0-.28.22-.5.5-.5s.5.22.5.5v3.72l2.26 1.35a.502.502 0 0 1-.26.93" />
                                </svg>
                                <span>

                                9:00 PM
                                </span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* =========== How to Watch Section ============ */}
                <section className="howToWatch">
                    <h1>How To Watch</h1>
                    <p>Multiple ways to join us online for worship and fellowship</p>
                    <div className="platforms">
                        {/* YouTube Block */}
                        <div className="plfrm">
                            <p className='YouTube'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 48 48">
                                    <path fill="none" stroke="#f00" strokeLinecap="round" strokeLinejoin="round" d="M43.112 14.394a5 5 0 0 0-3.533-3.533c-2.314-.894-24.732-1.332-31.236.025A5 5 0 0 0 4.81 14.42c-1.045 4.583-1.124 14.491.026 19.177a5 5 0 0 0 3.533 3.533c4.583 1.055 26.371 1.203 31.236 0a5 5 0 0 0 3.533-3.533c1.114-4.993 1.193-14.287-.026-19.203" strokeWidth="1" />
                                    <path fill="none" stroke="#f00" strokeLinecap="round" strokeLinejoin="round" d="M30.567 23.995L20.12 18.004v11.982Z" strokeWidth="1" />
                                </svg>
                            </p>
                            <br />
                            <p className='title'>YouTube Live</p>
                            <p>
                                Watch on our official YouTube channel with live
                                <br />
                                chat and community interaction.
                            </p>
                        </div>
                        {/* Facebook Block */}
                        <div className="plfrm">
                            <p className='FaceBook'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                    <path fill="#2250f7" d="M17.99 1.596a28 28 0 0 0-3.037-.156C11.59 1.44 9.5 3.582 9.5 7.03v2.341H6.675a.5.5 0 0 0-.5.5v3.85a.5.5 0 0 0 .5.5H9.5v7.72a.5.5 0 0 0 .5.5h3.978a.5.5 0 0 0 .5-.5v-7.72h2.816a.5.5 0 0 0 .496-.435l.497-3.85a.5.5 0 0 0-.496-.565h-3.313V7.412c0-.97.195-1.375 1.408-1.375h2.039a.5.5 0 0 0 .5-.5V2.092a.5.5 0 0 0-.435-.496m-.565 3.44l-1.54.001c-2.157 0-2.407 1.356-2.407 2.375v2.46a.5.5 0 0 0 .499.5h3.246l-.369 2.85h-2.876a.5.5 0 0 0-.5.5v7.718H10.5v-7.718a.5.5 0 0 0-.5-.5H7.176v-2.85H10a.5.5 0 0 0 .5-.5V7.03c0-2.874 1.665-4.59 4.453-4.59c1.009 0 1.92.055 2.472.103z" />
                                </svg>
                            </p>
                            <br />
                            <p className='title'>Facebook Live</p>
                            <p>
                                Join us on Facebook for live streaming with
                                <br />
                                comments and reactions from our community.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Watch_Live
