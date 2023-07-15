import { Button } from 'antd';
import React from 'react';

const Profile = (props) => {
    const { setLoggedIn } = props

    const handleExit = () => {
        setLoggedIn(false)
        localStorage.removeItem('token')
    }

    return (
        <div>
            <Button
                onClick={handleExit}
                type="primary"
                style={{ marginTop: '150px' }}
                block
                size={'large'}>
                Выход
            </Button>
        </div>
    );
};

export default Profile;