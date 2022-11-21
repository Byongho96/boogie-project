from rest_framework import serializers
from django.contrib.auth import get_user_model

class ProfileSeriallizer(serializers.ModelSerializer):
    profile_image = serializers.ImageField(use_url=True)

    class Meta:
        model = get_user_model()
        fields = ('profile_image', )

class BackdropSeriallizer(serializers.ModelSerializer):
    backdrop_image = serializers.ImageField(use_url=True)

    class Meta:
        model = get_user_model()
        fields = ('backdrop_image', )