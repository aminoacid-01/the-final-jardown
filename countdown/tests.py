from django.test import TestCase
from django.contrib.auth.models import User
from .models import Profile
from datetime import date

class ProfileTests(TestCase):

    def setUp(self):
        # Create a user
        self.user = User.objects.create_user(username='testuser', password='testpassword')
        self.profile = Profile.objects.get(user=self.user)

    def test_profile_creation(self):
        # Test that a profile is created when a user is created
        self.assertIsInstance(self.profile, Profile)
        self.assertEqual(self.profile.user.username, 'testuser')

    def test_profile_update(self):
        # Test updating the profile
        self.profile.bio = 'This is a test bio'
        self.profile.location = 'Test Location'
        self.profile.birth_date = date(2000, 1, 1)
        self.profile.save()

        updated_profile = Profile.objects.get(user=self.user)
        self.assertEqual(updated_profile.bio, 'This is a test bio')
        self.assertEqual(updated_profile.location, 'Test Location')
        self.assertEqual(updated_profile.birth_date, date(2000, 1, 1))

    def test_profile_deletion(self):
        # Test deleting the user and profile
        self.user.delete()
        profiles = Profile.objects.filter(user=self.user)
        self.assertEqual(profiles.count(), 0)