import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import { OptionType } from '../index';
import { MenuProps } from '../lib/components/Menu';
function Menu(props: MenuProps<OptionType>) {
  return (<Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
    {props.children}
  </Paper>);
}
Menu.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object,
} as any;

export { Menu };

