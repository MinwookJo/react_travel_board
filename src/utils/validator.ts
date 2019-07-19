export const required = (val: any): boolean => !!val;

export const isURL = (val: string): boolean =>
    /^(https?:\/\/)?[a-z0-9]+(\.[a-z]+)+(\/([a-zA-Z0-9#]+\/?)?)*$/.test(val);

    