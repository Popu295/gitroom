"use client";

import {createContext, useContext} from "react";
import {Integrations} from "@gitroom/frontend/components/launches/calendar.context";

export const IntegrationContext = createContext<{integration: Integrations|undefined, value: string[]}>({integration: undefined, value: []});

export const useIntegration = () => useContext(IntegrationContext);