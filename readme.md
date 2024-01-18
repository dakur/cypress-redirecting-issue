```bash
docker build -t cypress-from-factory .
docker-compose up -d
docker-compose exec cypress /bin/bash

# ✅ ok
cypress run --browser electron --headed

# ❌ error
cypress run --browser chrome --headed
```
