class PalavrasComando {
    private static final String[] comandosValidos = {
            "ir", "sair", "ajuda"
    };

    public boolean ehComando(String umaString) {
        for (String comando : comandosValidos) {
            if (comando.equals(umaString)) {
                return true;
            }
        }
        return false;
    }
}