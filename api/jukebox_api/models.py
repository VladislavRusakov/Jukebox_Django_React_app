from django.db import models
from django.core.validators import FileExtensionValidator
# Create your models here.


class Record(models.Model):
    artist = models.TextField()
    title = models.TextField()
    isPlayed = models.BooleanField(default=False, editable=False)
    # image = models.ImageField(blank=True, 
    #                           null=True, 
    #                           upload_to="image", 
    #                           validators=[
    #                             FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png']),
    #                                 ]
    #                             )
    imageUrl = models.TextField()
    youtubeUrl = models.TextField()

    def __str__(self):
        return self.title