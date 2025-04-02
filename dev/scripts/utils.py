import hashlib
import base64


def generate_secret_from_password(password: str) -> bytes:
    hashed_password = hashlib.sha256(password.encode()).digest()[:32]
    return base64.urlsafe_b64encode(hashed_password)
