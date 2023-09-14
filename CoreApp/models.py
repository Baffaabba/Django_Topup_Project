from django.db import models


class MobileNets(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name


class DataPrice(models.Model):
    name = models.CharField(max_length=30)
    duration = models.CharField(max_length=30)
    price = models.IntegerField()
    data_qty = models.IntegerField()
    gb_mb = models.CharField(max_length=2, choices=(
        ('mb', 'MB'), ('gb', 'GB')
    ))
    mobile_nets = models.ForeignKey(MobileNets, models.CASCADE)

    def __str__(self):
        return f'{self.data_qty}{self.gb_mb} {self.duration}  ₦{self.price}'


class Services(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    image_url = models.CharField(max_length=2083)
    img_alt = models.CharField(max_length=255)
    destination_url = models.CharField(max_length=2083)


# class Datas(models.Model):
#     name = models.ForeignKey(MobileNets, models.CASCADE)
#     data_price = models.ForeignKey(DataPrice, models.CASCADE, null=True, blank=True)
#     image_url = models.CharField(max_length=2083)
#     img_alt = models.CharField(max_length=255)
#     destination_url = models.CharField(max_length=2083)
#
#     def __str__(self):
#         return self.name