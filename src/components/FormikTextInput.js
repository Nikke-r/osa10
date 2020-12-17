import { useField } from 'formik';
import React from 'react';
import TextInput from './TextInput';
import Text from './Text';
import theme from '../themes';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  errorText: {
    marginBottom: 5,
    color: theme.colors.error,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return(
    <>
      <TextInput 
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}> {meta.error} </Text>  }
    </>
  );
};

export default FormikTextInput;