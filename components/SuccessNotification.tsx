'use-client'
import React from 'react'
import Alert from '@mui/material/Alert';

type SuccessNotificationProps = {
    isShown: boolean
}
export default function SuccessNotification({
    isShown
}: SuccessNotificationProps) {
    if (!isShown) { return null; }

    return (
        <Alert severity="success">Application added successfully!</Alert>

    )
}