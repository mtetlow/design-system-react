/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */
/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

import React from 'react';
import PropTypes from 'prop-types';

import { PORTAL_SETTINGS } from '../../utilities/constants';

/**
 * The Icon Settings component allows for the path to the icons to be specified in all child components and is recommended to be used at the root of the application. It's render function is `return this.props.children`, so it can only have one child node.
 *
 * **Individual sprites**
 * If you are using webpack it is advised to use the sprite properties
 * {actionSprite, standardSprite...} to specify the individual sprite paths so that webpack can
 * easily re-write the paths.
 * ```
 * import actionSprite from '......';
 *
 * <IconSettings actionSprite={actionSprite} ......>
 * ```
 * **Root icon path**
 * Otherwise use the iconPath to specify the root path to where the icon files will be located in you application
 * such as `/assets/icons`.
 */
const PortalSettings = ({
  renderTo,
  children
}) => {
	return (
		<PortalSettingsContext.Provider
			value={{
				renderTo
			}}
		>
			{children}
		</PortalSettingsContext.Provider>
	);
};

PortalSettings.displayName = PORTAL_SETTINGS;

PortalSettings.propTypes = {
	/**
	 * Path to the root icon folder
	 * example: `/assets/icons`
	 */
	renderTo: PropTypes.string,
};

const PortalSettingsContext = React.createContext({});

export default PortalSettings;
export { PortalSettingsContext };
