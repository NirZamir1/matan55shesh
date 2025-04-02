import sys
from cryptography.fernet import Fernet
from utils import generate_secret_from_password
SUFFIX = '-encrypted'
FILE_PATH = './.env'

if __name__ == "__main__":

    args_len = len(sys.argv)
    if args_len == 3:

        password = sys.argv[2]

        secret = generate_secret_from_password(password)
        ferent = Fernet(secret)

        with open(FILE_PATH, "r", encoding='utf-8') as file:
            content = file.read()

        if "encrypted-by-script=true" not in content:
            content += "\nencrypted-by-script=true\n"

        encrypted_content = ferent.encrypt(content.encode())

        with open(f'{FILE_PATH}{SUFFIX}', "wb") as encrypted_file:
            encrypted_file.write(encrypted_content)

    else:
        print("python3/python encrypt.py <secret>")
