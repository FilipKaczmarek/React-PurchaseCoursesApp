import React from "react";

import FullPageLayout from '../FullPageLayout'
import Message from '../Message'

export const FullPageMessage = (props) => {
    return (
        <FullPageLayout>
            <Message 
            {...props}
            />
        </FullPageLayout>
    )
}

export default FullPageMessage