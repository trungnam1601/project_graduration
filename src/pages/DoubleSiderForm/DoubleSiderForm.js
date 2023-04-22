import React, { useState } from 'react';

import Styles from './DoubleSiderForm.module.scss';
import classNames from 'classnames/bind';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

const cx = classNames.bind(Styles);
function DoubleSiderForm() {
    const [isActive, setIsActive] = useState(false);
    const handleActive = (e) => {
        setIsActive((current) => !current);
    };

    return (
        <div className={cx('wrapper', isActive ? 'right-panel-active' : '')}>
            <div class={cx('form-container', 'sign-up-container')}>
                <form action="#">
                    <h1>Create Account</h1>
                    <div class={cx('social-container')}>
                        <Button class={cx('social')}>
                            <FaFacebookF />
                        </Button>

                        <Button class={cx('social')}>
                            <FaGoogle />
                        </Button>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />

                    <Button className={cx('btn')}>Sign Up</Button>
                </form>
            </div>
            <div class={cx('form-container', 'sign-in-container')}>
                <form action="#">
                    <h1>Sign in</h1>
                    <div class={cx('social-container')}>
                        <Button class={cx('social')}>
                            <FaFacebookF />
                        </Button>

                        <Button class={cx('social')}>
                            <FaGoogle />
                        </Button>
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <Link className={cx('forgot')} to="#">
                        Forgot your password?
                    </Link>
                    <Button className={cx('btn')}>Sign In</Button>
                </form>
            </div>

            <div class={cx('overlay-container')}>
                <div class={cx('overlay')}>
                    <div class={cx('overlay-panel', 'overlay-left')}>
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <Button class={'ghost'} id="signIn" onClick={handleActive}>
                            Sign In
                        </Button>
                    </div>
                    <div class={cx('overlay-panel', 'overlay-right')}>
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <Button class={cx('ghost')} id="signUp" onClick={handleActive}>
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoubleSiderForm;
