import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { Input } from '../Input';

/**
 * 
 * Components
 */
import {
    Container
} from './styles';

/**
 * 
 * React Native
 */
interface Props extends TextInputProps {
    control: Control;
    name: string;
};

export function InputForm({
    control,
    name,
    ...rest
}: Props) {
    return (
        <Container>
            <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Input
                        onChangeText={onChange}
                        value={value}
                        { ...rest }
                    />
                )}
            />
        </Container>
    );
} 