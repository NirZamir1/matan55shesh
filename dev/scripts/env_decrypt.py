
import sys
from cryptography.fernet import Fernet
from utils import generate_secret_from_password

SUFFIX = '-encrypted'
FILE_PATH = './.env-encrypted  '


if __name__ == '__main__':

    args_len = len(sys.argv)

    if args_len == 3:
        password = sys.argv[2]

        with open(FILE_PATH, 'rb') as file:
            encrypted_data = file.read()

        secret = generate_secret_from_password(password)
        ferent = Fernet(secret)

        decrypted_data = ferent.decrypt(encrypted_data).decode()

        if "encrypted-by-script=true" not in decrypted_data:
            print("wrong key, or wasn't encrypted by this script")
            sys.exit(1)

        if FILE_PATH[-len(SUFFIX):] == SUFFIX:
            output_path = FILE_PATH[:-len(SUFFIX)]
        else:
            output_path = FILE_PATH + "-decrypted"

        with open(output_path, 'w', encoding='utf-8') as file:
            file.write(decrypted_data)

    else:
        print('python3 decrypt.py <password>')
