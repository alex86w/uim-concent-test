/**
 * merge all concent models in this file to infer the root modle type
 */
import models from "@/ccModels";

const allModels = models;

export type Models = typeof allModels;
