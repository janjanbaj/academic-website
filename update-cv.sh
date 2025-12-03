#!/bin/bash

cp /home/ubuntu/backup_typst/janjan_typst/Personal\ Projects/Projects/CV/academic.typ /home/ubuntu/academic-cv-site/public/static/
cp /home/ubuntu/backup_typst/janjan_typst/Personal\ Projects/Projects/CV/template.typ /home/ubuntu/academic-cv-site/public/static/

cd /home/ubuntu/academic-cv-site/public/static/

typst compile academic.typ cv.pdf

