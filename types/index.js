interface AuthProviderOptions {
    clientId: string;
    clientSecret: string;
}

interface AuthProvider {
    (options: AuthProviderOptions): any; // Pamiętaj, aby dostosować ten typ zależnie od implementacji GoogleProvider
}

interface AuthPageOptions {
    signIn: string;
}

interface AuthOptions {
    providers: AuthProvider[];
    pages: AuthPageOptions;
}

export {AuthOptions}