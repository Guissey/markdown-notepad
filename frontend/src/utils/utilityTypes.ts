/** From type T, makes all the properties optional (as Partial) except those specified in K */
export type PartialBut<T, K extends keyof T> = Pick<T, K> & Partial<Omit<T, K>>;
