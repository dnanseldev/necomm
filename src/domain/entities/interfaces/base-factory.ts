import { Result } from "../../validation/result-error";
import { TGenericParametersType } from "./base-types";

export interface TCreator<T, R extends Result<T> > {

     factoryMethod(...args: any): R
}