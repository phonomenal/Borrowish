import * as React from 'react';
import { TextField } from '@material-ui/core';

interface Props {
    onSubmit: () => void;

}

export const MyForm: React.FC<Props> = () => {
    return <TextField />;
    
}