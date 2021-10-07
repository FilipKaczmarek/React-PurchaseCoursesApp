import React from "react";

import FullPageLayout from '../FullPageLayout'
import Loader from '../Loader'

export const FullPageLoader = (props) => {
    return (
        <FullPageLayout>
            <Loader 
            {...props}
            />
        </FullPageLayout>
    )
}

export default FullPageLoader