import React from 'react';

const IframeComponent = () => {
    const iframeUrl = `${import.meta.env.VITE_API_URL}/nasa`; // URL da página do usuário

    return (
        <iframe
            src={iframeUrl}
            title="User Page"
            width="100%"
            height="600px"
            style={{ border: 'none' }}
        />
    );
};

export default IframeComponent;
