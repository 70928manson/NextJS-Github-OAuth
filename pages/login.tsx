import React from 'react';
import Head from 'next/head';
import Layout from '@/layout/layout';
import Image from 'next/image';

const Login = () => {
    return (
        <Layout>
            <Head>
                <title>Login</title>
            </Head>
            <section className="w-3/4 mx-auto flex flex-col gap-10">
                <div className="title">
                    <h1 className="text-gray-800 text-4xl font-bold py-4">
                        Github tracker
                    </h1>
                    <p className="w-3/4 mx-auto text-gray-400">this is some text</p>
                </div>
                {/*login button */}
                <div className="input-button">
                    <button type="button" className="w-full border py-3 flex justify-center gap-2 hover:bg-gray-200">
                        Sign in with Github <Image src={'/assets/github.svg'} alt="hi" width={25} height={25}></Image>
                    </button>
                </div>
                {/* <p className="text-center text-gray-400">Happy Coding~</p> */}
            </section>
        </Layout>
    );
};

export default Login;